// This file is part of CycloneDX Web Tool
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0
// Copyright (c) OWASP Foundation. All Rights Reserved.

window.cdxClickElementById = function (id)
{
    let element = document.getElementById(id);
    let originalVisibility = element.style.visibility;
    if (originalVisibility === "hidden")
    {
        element.style.visibility = "inline";
    }
    element.click();
    if (originalVisibility === "hidden")
    {
        element.style.visibility = "hidden";
    }
};

window.cdxFileDownload = function (filename, base64Contents)
{
    let element = document.createElement('a');
    element.setAttribute('href', 'data:application/octet-stream;base64,' + base64Contents);
    element.setAttribute('download', filename);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}