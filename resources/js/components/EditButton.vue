<template>
  <div
    v-if="field.visible"
    class="inline-flex cursor-pointer text-70 hover:text-primary relative"
    style="left:12px;"
    :dusk="`${resourceId}-custom-edit-button`"
    @click="navigate"
    v-tooltip.click="__('Edit')"
  >
    <icon type="edit" />
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
