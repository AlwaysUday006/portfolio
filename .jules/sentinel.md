# Sentinel Journal

## 2025-02-19 - Missing rel="noopener noreferrer" on target="_blank"
**Vulnerability:** Several external links use `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** This exposes the site to "Reverse Tabnabbing" attacks where the linked page can manipulate the original page using `window.opener`. It also leaks referrer information.
**Prevention:** Always add `rel="noopener noreferrer"` to any link that opens in a new tab (`target="_blank"`).
