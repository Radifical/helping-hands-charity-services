// ---------------------------------------------------------------------------
// FORMSPREE CONFIG
// Paste your three Formspree form IDs below (the part after /f/ in the
// endpoint Formspree gives you, e.g. "xbjnzkqw"). One per form keeps the
// submissions in separate inboxes/exports.
//
// While an ID is left as a REPLACE_* placeholder, that form simply shows a
// success message without sending anywhere, so the site still works during
// setup. Swap in the real IDs and you're live, no other code changes needed.
// ---------------------------------------------------------------------------

export const formspreeIds = {
  donation: "xeewljor",
  partner: "xgoblwvr",
  story: "mbdeardr",
};

export function formspreeEndpoint(key) {
  const id = formspreeIds[key];
  if (!id || id.startsWith("REPLACE_")) return null; // not configured yet
  return `https://formspree.io/f/${id}`;
}

/**
 * Submit a <form> to Formspree. Returns true on success.
 * If the endpoint isn't configured yet, resolves true so the UI still
 * confirms (lets you build/preview before pasting IDs).
 */
export async function submitForm(key, formEl) {
  const endpoint = formspreeEndpoint(key);
  if (!endpoint) return true; // placeholder mode

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(formEl),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.errors?.[0]?.message || "Submission failed");
  }
  return true;
}
