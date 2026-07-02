export function exportCanvasAsPng(canvas: HTMLCanvasElement, filename = 'export.png') {
  try {
    const data = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = data;
    a.download = filename;
    a.click();
    return true;
  } catch (e) {
    console.error('Export failed', e);
    return false;
  }
}
