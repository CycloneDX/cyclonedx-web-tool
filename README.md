[![Build Status](https://github.com/CycloneDX/cyclonedx-web-tool/workflows/.NET%20Core%20CI/badge.svg)](https://github.com/CycloneDX/cyclonedx-cli/actions?workflow=.NET+Core+CI)
[![License](https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg)](LICENSE)
[![Website](https://img.shields.io/badge/https://-cyclonedx.org-blue.svg)](https://cyclonedx.org/)
[![Slack Invite](https://img.shields.io/badge/Slack-Join-blue?logo=slack&labelColor=393939)](https://cyclonedx.org/slack/invite)
[![Group Discussion](https://img.shields.io/badge/discussion-groups.io-blue.svg)](https://groups.io/g/CycloneDX)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow)](https://twitter.com/CycloneDX_Spec)

# CycloneDX Web Tool

A web based tool for working with CycloneDX BOMs.

Supported functionality:

- Converting between different versions and formats
- Validation
- Merging multiple BOMs into a single BOM

# BOM data privacy

The web tool is built as a "static site" using WebAssembly for BOM processing.

All processing is done client side in your browser. No submitted BOM data is transmitted elsewhere.

# Self Hosting

The web tool is built as a "static site". Any standard web server should work.

# Supported Browsers

The web tool is supported on the current versions of the following browsers:

- Apple Safari (including on iOS)
- Google Chrome (including on Android)
- Microsoft Edge
- Mozilla Firefox

## License

Permission to modify and redistribute is granted under the terms of the Apache 2.0 license. See the [LICENSE] file for the full license.

[License]: https://github.com/CycloneDX/cyclonedx-web-tool/blob/main/LICENSE

## Contributing

Pull requests are welcome. But please read the
[CycloneDX contributing guidelines](https://github.com/CycloneDX/.github/blob/master/CONTRIBUTING.md) first.

To build and test the solution locally you should have .NET 5
installed. Standard commands like `dotnet build` and `dotnet test` work.
