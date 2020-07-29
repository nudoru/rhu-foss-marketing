<script type="text/jsx">

const cls = context => [
  'feature-card',
  context.data.class ? context.data.class : '',
  context.data.staticClass ? context.data.staticClass : ''
].join(' ');

export default {
  name      : 'FeatureCard',
  functional: true,
  props     : {
    p: {
      type   : Boolean,
      default: false
    }
  },
  render(h, context) {
    const props = context.props;
    return (
        <div class={cls(context)}>
          {context.children}
        </div>
    );
  },
};
</script>