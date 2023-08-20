import init, {generate_hash} from './pkg/wasm_hasher.js';

async function runWasm() {
  await init();
}

runWasm();

document.getElementById('generateButton').addEventListener('click', generateHash);

function generateHash() {
  const fileInput = document.getElementById('fileInput');
  const algorithmSelect = document.getElementById('algorithmSelect');
  const hashResult = document.getElementById('hashResult');
  const loadingSpinner = document.getElementById('loadingSpinner');

  // Show the spinner
  hashResult.style.display = "none";
  loadingSpinner.style.display = 'block';

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = async function(event) {
    const data = new Uint8Array(event.target.result);
    const algorithm = algorithmSelect.value;
    const hash = await generate_hash(data, algorithm)
    // Update the hash result
    hashResult.textContent = hash;
    hashResult.style.display = "block";

    // Hide the spinner
    loadingSpinner.style.display = 'none';
  };

  reader.readAsArrayBuffer(file);
}
