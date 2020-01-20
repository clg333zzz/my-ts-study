declare namespace umdLib {
  const version: string;
  function doSomething(): void
}

// 为umd库专用
export as namespace umdLib

export = umdLib