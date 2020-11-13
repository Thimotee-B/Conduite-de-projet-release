const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreationSprint', function() {
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
  it('CreationSprint', async function() {
    // Test name: CreationSprint
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(3) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(3) > td:nth-child(1)")).click()
    // 4 | click | linkText=Sprints | 
    await driver.findElement(By.linkText("Sprints")).click()
    // 5 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
  })
})
