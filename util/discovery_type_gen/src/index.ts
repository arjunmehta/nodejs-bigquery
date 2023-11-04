'use strict';

import {TypeGenerator} from './generator.js';
// import * as common from '@google-cloud/common'
import got from 'got';
//const got = require('got');

export async function fetch(api, version) {
  const url = `https://www.googleapis.com/discovery/v1/apis/${api}/${version}/rest`;
  const response = await got(url, {json: true});
  return response.body;
}

export function render(json?, options?) {
  return new TypeGenerator(json, options).render();
}

export async function createTypes(api, version) {
  const json = await fetch(api, version);
  return render(json);
}


/*module.exports = createTypes;
module.exports.createTypes = createTypes;
module.exports.fetch = fetch;
module.exports.render = render;*/
