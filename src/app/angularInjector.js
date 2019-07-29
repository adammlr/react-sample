let $injector;

export let lazyInjector = {
  get $injector() {
    return {
      get get() {
        return $injector.get;
      }
    };
  },
  set $injector(_$injector) {
    $injector = _$injector;
  }
};
