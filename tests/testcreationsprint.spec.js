const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test creation sprint', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test creation sprint', async function() {
    // Test name: Test creation sprint
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(5) > td:nth-child(2) | 
    await driver.findElement(By.css(".clickable-row:nth-child(5) > td:nth-child(2)")).click()
    // 4 | click | css=.nav-item:nth-child(6) span | 
    await driver.findElement(By.css(".nav-item:nth-child(6) span")).click()
    // 5 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
  })
})
