<template>
  <q-table
    ref="tableRef"
    row-key="id"
    :columns="columns"
    v-model:pagination="pagination"
    selection="multiple"
    :selected="selected"
    @selection="handleSelection"
    :selected-rows-label="getSelectedRowsLabel"
  >
    <template v-slot:body-cell-dnssec="props">
      <q-td :props="props">
        <q-icon
          v-if="!!props.value"
          color="positive"
          size="sm"
          name="enhanced_encryption"
          style="display:block"
        />
        <q-icon
          v-else
          color="negative"
          size="sm"
          name="no_encryption"
          style="display:block"
        />
      </q-td>
    </template>

    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <div class="flex justify-end gap-xs">
          <q-btn
            flat
            round
            size="sm"
            color="negative"
            icon="delete"
            @click="handleDeleteZone"
          >
            <q-tooltip>{{$t('button.delete')}}</q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            size="sm"
            color="secondary"
            icon="storage"
            :to="{name: 'record.list', params: {serverId: serverId, zoneId: props.row.id}}"
          >
            <q-tooltip>{{$t('button.editRecords')}}</q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            size="sm"
            color="primary"
            icon="edit"
            :to="{name: 'zone.edit', params: {serverId: serverId, zoneId: props.row.id}}"
          >
            <q-tooltip>{{$t('button.editZone')}}</q-tooltip>
          </q-btn>
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script>
import {
  defineComponent,
} from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

import useAdvancedTableSelection from 'lib/useAdvancedTableSelection';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ZoneList',

  props: {
    serverId: {
      type: String,
      required: true,
    },
  },

  setup() {
    const { t } = useI18n();

    const columns = [
      {
        name: 'name',
        required: true,
        label: t('zone.field.name'),
        align: 'left',
        field: (row) => row.name,
        sortable: true,
      },
      {
        name: 'kind',
        required: true,
        label: t('zone.field.kind'),
        align: 'left',
        field: (row) => row.kind,
        sortable: true,
        // headerStyle: 'width: 1em',
      },
      {
        name: 'dnssec',
        required: true,
        label: t('zone.field.dnssec'),
        align: 'center',
        field: (row) => row.dnssec,
        sortable: true,
        headerStyle: 'width: 1em',
      },
      {
        name: 'serial',
        required: true,
        label: t('zone.field.serial'),
        align: 'left',
        field: (row) => row.serial,
        sortable: true,
      },
      {
        name: 'account',
        required: true,
        label: t('zone.field.account'),
        align: 'left',
        field: (row) => (row.account || '-'),
        sortable: true,
      },
      {
        name: 'actions',
        label: t('zone.field.actions'),
        field: () => '',
        sortable: false,
      },
    ];

    const pagination = useLocalStorage('pagination', {
      sortBy: 'name',
      descending: false,
      page: 1,
      rowsPerPage: 10,
    });
    pagination.value.page = 1;

    function handleDeleteZone() {

    }

    return {
      columns,
      pagination,

      handleDeleteZone,

      ...useAdvancedTableSelection(),
    };
  },
});
</script>
