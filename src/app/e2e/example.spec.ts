import { test, expect } from '@playwright/test'

test('should root page has Docs string', async ({ page }) => {
  // インデックスページからテストを開始 
  await page.goto('http://localhost:3000/')
  // ページの h2要素には "Docs" が含まれる
  await expect(page.locator('h2').nth(0)).toContainText(/Docs*/)
})