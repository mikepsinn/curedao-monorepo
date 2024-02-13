function saveOptions(e) {
  e.preventDefault();
  const behavior = document.querySelector('input[name="behavior"]:checked').value;
  const frequency = document.getElementById('frequency').value;
  chrome.storage.sync.set({ behavior, frequency }, function() {
    // Show saved status
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 1500); // Clear status after 1.5 seconds
  });
}

function restoreOptions() {
  chrome.storage.sync.get(["behavior", "frequency"], function(items) {
    if (items.behavior) {
      document.querySelector(`input[name="behavior"][value="${items.behavior}"]`).checked = true;
    }
    if (items.frequency) {
      document.getElementById('frequency').value = items.frequency;
    }
  });
}


document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelectorAll('input[name="behavior"]').forEach(input => {
  input.addEventListener('change', saveOptions);
});
document.getElementById('frequency').addEventListener('change', saveOptions);
