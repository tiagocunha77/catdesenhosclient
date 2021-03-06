import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { CgService } from './services/cg-service';

Aurelia
  .register(RouterConfiguration)
  //.register(CgService)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
