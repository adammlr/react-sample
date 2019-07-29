import { angular2react } from 'angular2react';
import { lazyInjector } from '../app/angularInjector';

export const angularPostListItem = {
  bindings: {
    onLinkClick: '<', //angular does not have access to react context here, cannot interact with react-router-dom
    title: '<',
    id: '<'
  },
  template: `
    <div>
      <a ng-click="this.$ctrl.onLinkClick(this.$ctrl.id)">{{this.$ctrl.title}}</a>
    </div>
  `
};

const reactPostListITem = angular2react(
  'angularPostListItem',
  angularPostListItem,
  lazyInjector.$injector
);

export default reactPostListITem;
