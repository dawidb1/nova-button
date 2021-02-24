Nova.booting((Vue, router) => {
  Vue.component('nova-button', require('./components/NovaButton').default);
  Vue.component(
    'index-nova-button',
    require('./components/IndexField').default,
  );
  Vue.component(
    'detail-nova-button',
    require('./components/DetailField').default,
  );

  Vue.component(
    'index-edit-button',
    require('./components/EditButton').default,
  );
  Vue.component(
    'index-preview-button',
    require('./components/PreviewButton').default,
  );
});
