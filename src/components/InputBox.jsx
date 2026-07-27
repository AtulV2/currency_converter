import React, { useId, useState, useEffect } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()
  const [localValue, setLocalValue] = useState(amount === 0 ? "0" : String(amount))

  // Sync when parent changes amount (e.g. after conversion)
  useEffect(() => {
    setLocalValue(amount === 0 ? "0" : String(amount))
  }, [amount])

  const handleFocus = () => {
    // Show empty box on focus if value is 0
    if (localValue === "0") setLocalValue("")
  }

  const handleBlur = () => {
    // Restore 0 if user left the field empty
    if (localValue === "" || localValue === undefined) {
      setLocalValue("0")
      onAmountChange && onAmountChange(0)
    }
  }

  const handleChange = (e) => {
    const raw = e.target.value

    // Remove leading zeros like "01" → "1"
    const cleaned = raw.replace(/^0+(\d)/, '$1')

    setLocalValue(cleaned)
    onAmountChange && onAmountChange(Number(cleaned) || 0)
  }

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={localValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox