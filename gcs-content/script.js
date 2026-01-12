document.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.getElementById('app-status');
    statusDiv.textContent = 'App is running normally. Script loaded from GCS.';
    statusDiv.style.backgroundColor = '#d4edda';
    statusDiv.style.color = '#155724';
    console.log('GCS Demo Script Loaded');
});
