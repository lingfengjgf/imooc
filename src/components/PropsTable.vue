<template>
  <div class="props-table">
    <div v-for="(item, i) in finalProps" :key="i" class="props-item">
      <span class="label" v-if="item">{{ item.text }}</span>
      <div class="prop-component">
        <component
          v-if="item"
          :is="item.component"
          :value="item.value"
          v-bind="item.extraProps"
          v-on="item.events"
        >
          <template v-if="item.options">
            <component
              :is="item.subComponent"
              v-for="(option, k) in item.options"
              :key="k"
              :[item.valueProp]="option.value"
            >
              <render-vnode :vNode="option.text"></render-vnode>
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed, VNode } from "vue";
import { TextComponentProps } from "../defaultProps";
import { reduce } from "lodash-es";
import { mapProprsToForms } from "../propsMap.ts";
import RenderVnode from "./RenderVnode.ts";
interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | VNode; value: any }[];
  valueProp: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}

export default defineComponent({
  name: "props-table",
  components: { RenderVnode },
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      require: true,
    },
  },
  setup(props, { emit }) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const newKey = key as keyof TextComponentProps;
          const item = mapProprsToForms[newKey];
          if (item) {
            const {
              valueProp = "value",
              eventName = "change",
              initalTransform,
              afterTransform,
            } = item;
            const newItem: FormProps = {
              ...item,
              value: initalTransform ? initalTransform(value) : value,
              valueProp,
              eventName,
              events: {
                [eventName]: (e: any) => {
                  console.log(e);
                  console.log(afterTransform);

                  emit("change", {
                    key,
                    value: afterTransform ? afterTransform(e) : e,
                  });
                },
              },
            };
            result[newKey] = newItem;
          }
          return result;
        },
        {} as { [key: string]: FormProps }
      );
    });

    return { finalProps };
  },
});
</script>

<style scoped>
.props-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.label {
  width: 28%;
}
.prop-component {
  width: 70%;
}
</style>
