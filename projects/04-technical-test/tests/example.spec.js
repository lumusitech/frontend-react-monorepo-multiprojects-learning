// @ts-check
import { expect, test } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // html --> head --> title
  await expect(page).toHaveTitle(/Catty App/)

  const h1 = page.getByRole('heading', { level: 1 })
  const p = page.getByRole('paragraph')
  const img = page.getByRole('img')

  const textContent = await p.textContent()
  const imgSrc = await img.getAttribute('src')

  expect(h1).toContainText('Catty App')
  expect(textContent?.length).toBeGreaterThan(0)
  expect(imgSrc).toBeTruthy()
})
