import React from 'react';

const CONTROL_BASE =
  'rounded-sm border-[1.5px] border-line bg-paper-raised px-3.5 py-3 text-[15px] text-ink transition-colors duration-150 ease-out focus:border-coral-ink focus:outline-none';

/**
 * Labeled form field. Pass `as="select"` with `options` to render a select.
 */
export default function Input({
  label,
  id,
  as = 'input',
  options = [],
  error,
  hint,
  ...rest
}) {
  const fieldId = id || rest.name;
  const controlClassName = `${CONTROL_BASE} ${error ? 'border-danger' : ''}`;
  return (
    <label className="flex flex-col gap-1.5" htmlFor={fieldId}>
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">{label}</span>
      {as === 'select' ? (
        <select id={fieldId} className={controlClassName} {...rest}>
          <option value="" disabled>
            Select…
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input id={fieldId} className={controlClassName} {...rest} />
      )}
      {hint && !error && <span className="text-xs text-ink-soft">{hint}</span>}
      {error && <span className="text-xs text-danger">{error}</span>}
    </label>
  );
}
