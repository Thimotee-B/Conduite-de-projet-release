const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('SupressionUS', function() {
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
  it('SupressionUS', async function() {
    // Test name: SupressionUS
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(3) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(3) > td:nth-child(1)")).click()
    // 4 | click | css=.nav-item:nth-child(7) span | 
    await driver.findElement(By.css(".nav-item:nth-child(7) span")).click()
    // 5 | click | css=.fa-trash-alt | 
    await driver.findElement(By.css(".fa-trash-alt")).click()
  })
})
