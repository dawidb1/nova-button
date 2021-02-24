<template>
  <div
    v-if="field.visible"
    class="inline-flex cursor-pointer text-70 hover:text-primary relative"
    style="left:24px;"
    :dusk="`${resourceId}-custom-view-button`"
    @click="navigate"
    v-tooltip.click="__('View')"
  >
    <icon type="view" width="22" height="18" view-box="0 0 22 16" />
  </div>
</template>

<script>
export default {
  props: ['resource', 'resourceName', 'resourceId', 'field'],
  methods: {
    navigate() {
      if (this.field.type == 'route') {
        this.$router.push(this.field.route);
      }
    },
  },
};
</script>
