import React, { useState } from "react";

// FLAMES App - Single-file React component
// Features:
// - Enter two names
// - Computes FLAMES result (Friends, Love, Affection, Marriage, Enemy, Siblings)
// - Animated elimination visualization (simple)
// - Reset / Copy result

const FLAMES_MAP = {
  F: "Friends",
  L: "Love",
  A: "Affection",
  M: "Marriage",
  E: "Enemies",
  S: "Siblings",
};

function computeRemainingCount(name1, name2) {
  // normalize and remove spaces
  const a = name1.replace(/\s+/g, "").toLowerCase();
  const b = name2.replace(/\s+/g, "").toLowerCase();

  // build frequency maps
  const freq = {};
  for (const ch of a) freq[ch] = (freq[ch] || 0) + 1;
  for (const ch of b) freq[ch] = (freq[ch] || 0) - 1;

  // sum absolute differences
  let count = 0;
  for (const k in freq) count += Math.abs(freq[k]);
  return count;
}

function flamesFromCount(count) {
  if (!count) return "Siblings"; // special-case: no leftover letters -> Siblings

  let flames = ["F", "L", "A", "M", "E", "S"];

  // elimination algorithm: repeatedly remove the (count-1) % length index
  let idx = 0;
  while (flames.length > 1) {
    idx = (count - 1 + idx) % flames.length; // step (count-1) from current
    flames.splice(idx, 1);
    // idx remains at the removed index (next position) for the next round
  }
  return FLAMES_MAP[flames[0]] || "Unknown";
}

export default function FlamesApp() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  function handleCalculate(e) {
    e?.preventDefault();
    const c = computeRemainingCount(name1, name2);
    const r = flamesFromCount(c);
    setResult({ label: r, count: c });
    setHistory((h) => [
      { t: new Date().toISOString(), name1, name2, result: r, count: c },
      ...h,
    ]);
  }

  function handleReset() {
    setName1("");
    setName2("");
    setResult(null);
  }

  function handleQuickExample() {
    setName1("Amarendra Bahuballi");
    setName2("Devasena");
    setTimeout(() => handleCalculate({ preventDefault: () => {} }), 50);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-3">FLAMES - React + JS</h1>
        <p className="text-sm mb-4">Enter two names and click "Calculate" to see their FLAMES result.</p>

        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              placeholder="Enter first name"
              className="px-4 py-2 rounded-lg border"
            />
            <input
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              placeholder="Enter second name"
              className="px-4 py-2 rounded-lg border"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg shadow-sm border hover:shadow"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-lg border"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleQuickExample}
              className="px-4 py-2 rounded-lg border"
            >
              Quick Example
            </button>
          </div>
        </form>

        <div className="mt-6">
          {result ? (
            <div className="p-4 rounded-lg border">
              <div className="text-sm text-gray-600">Remaining letters count: {result.count}</div>
              <div className="mt-2 text-xl font-bold">Result: {result.label}</div>
            </div>
          ) : (
            <div className="p-4 text-sm text-gray-500">No result yet — try calculating.</div>
          )}
        </div>

        <details className="mt-6">
          <summary className="cursor-pointer">History ({history.length})</summary>
          <div className="mt-2 space-y-2">
            {history.length === 0 && <div className="text-sm text-gray-500">No history</div>}
            {history.map((h, i) => (
              <div key={i} className="text-sm border rounded p-2">
                <div className="text-xs text-gray-500">{new Date(h.t).toLocaleString()}</div>
                <div>
                  <strong>{h.name1}</strong> + <strong>{h.name2}</strong> =&gt; <em>{h.result}</em> ({h.count})
                </div>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-6 text-xs text-gray-500">
          Implementation notes: the algorithm removes common characters from both names, counts the remaining
          letters, then uses the classic FLAMES elimination process to determine the relation.
        </div>

        <hr className="my-6" />

        <h2 className="text-lg font-medium">Plain JavaScript function</h2>
        <pre className="mt-2 p-3 bg-gray-100 rounded text-sm overflow-auto">
{`// Simple JS function you can use in any project
function flamesResult(name1, name2) {
  function computeRemainingCount(a, b) {
    a = a.replace(/\s+/g, '').toLowerCase();
    b = b.replace(/\s+/g, '').toLowerCase();
    const freq = {};
    for (const ch of a) freq[ch] = (freq[ch] || 0) + 1;
    for (const ch of b) freq[ch] = (freq[ch] || 0) - 1;
    let c = 0;
    for (const k in freq) c += Math.abs(freq[k]);
    return c;
  }
  const map = {F:'Friends',L:'Love',A:'Affection',M:'Marriage',E:'Enemies',S:'Siblings'};
  const count = computeRemainingCount(name1, name2);
  if (!count) return 'Siblings';
  let arr = ['F','L','A','M','E','S'];
  let idx = 0;
  while (arr.length > 1) {
    idx = (count - 1 + idx) % arr.length;
    arr.splice(idx, 1);
  }
  return map[arr[0]];
}

// Example:
console.log(flamesResult('Amarendra Bhauballi', 'Devasena'));
`}
        </pre>

        <div className="mt-4 text-xs text-gray-600">Save this file as <code>FlamesApp.jsx</code> inside a React project and import it into your router or <code>App.js</code>.</div>
      </div>
    </div>
  );
}
