// Copyright (c) 2025 okutama (https://github.com/okutama)
//
// Portions of the code in this file are modified from code distributed under the MIT license by Kevin Mårtensson <kevinmartensson@gmail.com> (github.com/kevva).
// The full text of the original license can be found in the LICENSE file of this product.
// 
// Modifications include: Change module style from Common Module to ES Module.
// 
// Original Copyright Notice:
// Copyright (c) Kevin Mårtensson <kevinmartensson@gmail.com> (github.com/kevva)

'use strict';
export const encodeUriStrict = string => encodeURIComponent(string).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);