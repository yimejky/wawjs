function inspect(value, opts) {
  // Default options
  const ctx = {

    
    depth: inspectDefaultOptions.depth,
    colors: inspectDefaultOptions.colors,
    
  };
  // Legacy...
  if (arguments.length > 2) {
    if (arguments[2] !== undefined) {
      ctx.depth = arguments[2];
    }
    if (arguments.length > 3 && arguments[3] !== undefined) {
      ctx.colors = arguments[3];
    }
  }
  // Set user-specified options
  if (typeof opts === 'boolean') {
    ctx.showHidden = opts;
  } else if (opts) {
    const optKeys = Object.keys(opts);
    for (var i = 0; i < optKeys.length; i++) {
      ctx[optKeys[i]] = opts[optKeys[i]];
    }
  }
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  if (ctx.maxArrayLength === null) ctx.maxArrayLength = Infinity;
  return formatValue(ctx, value, ctx.depth);
}