import {
  ref,
} from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

//------------------------------------------------------------------------------
function useAdvancedTableSelection() {
  const $q = useQuasar();
  const { t } = useI18n();
  const selected = ref([]);
  const tableRef = ref();
  const lastIndex = ref();

  function handleSelection({ rows, added, evt }) {
    // Source for selection management are the quasar docs.
    if (rows.length === 0 || tableRef.value === void 0) {
      return;
    }

    const row = rows[0];
    const { filteredSortedRows } = tableRef.value;
    const rowIndex = filteredSortedRows.indexOf(row);
    const localLastIndex = lastIndex.value;

    lastIndex.value = rowIndex;
    document.getSelection().removeAllRanges();

    if ($q.platform.is.mobile === true) {
      evt = { ctrlKey: true };
    } else if (evt !== Object(evt) || (!evt.shiftKey && !evt.ctrlKey)) {
      selected.value = added
        ? rows
        : [];
      return;
    }

    const operateSelection = added
      ? (selRow) => {
        const selectedIndex = selected.value.indexOf(selRow);
        if (selectedIndex === -1) {
          selected.value = selected.value.concat(selRow);
        }
      }
      : (selRow) => {
        const selectedIndex = selected.value.indexOf(selRow);
        if (selectedIndex > -1) {
          selected.value = selected.value
            .slice(0, selectedIndex)
            .concat(selected.value.slice(selectedIndex + 1));
        }
      };

    if (localLastIndex === null || evt.shiftKey !== true) {
      operateSelection(row);
      return;
    }

    const from = localLastIndex < rowIndex ? localLastIndex : rowIndex;
    const to = localLastIndex < rowIndex ? rowIndex : localLastIndex;
    for (let i = from; i <= to; i += 1) {
      operateSelection(filteredSortedRows[i]);
    }
  }

  return {
    selected,
    tableRef,
    handleSelection,
    getSelectedRowsLabel: (count) => t('zone.numberOfZones', count),
  };
}

export default useAdvancedTableSelection;
