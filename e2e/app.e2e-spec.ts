import { BulkUploadNg2Page } from './app.po';

describe('bulk-upload-ng2 App', function() {
  let page: BulkUploadNg2Page;

  beforeEach(() => {
    page = new BulkUploadNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
