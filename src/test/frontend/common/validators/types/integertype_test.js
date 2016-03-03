// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {IntegerType} from 'common/validators/types/integertype';

describe('Integer type', () => {
  /** @type {!IntegerType} */
  let integerType;

  beforeEach(() => { angular.mock.inject(() => { integerType = new IntegerType(); }); });

  it('should return true when valid integer', () => {
    // given
    let number = 5;

    // then
    expect(integerType.isValid(number)).toBeTruthy();
  });

  it('should return false when invalid integer', () => {
    // given
    let number = 5.1;

    // then
    expect(integerType.isValid(number)).toBeFalsy();
  });
});