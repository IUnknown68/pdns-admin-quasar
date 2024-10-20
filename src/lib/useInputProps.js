import { readonly } from 'vue';

const inputProps = readonly({
  filled: true,
  stackLabel: true,
});

export default () => inputProps;
