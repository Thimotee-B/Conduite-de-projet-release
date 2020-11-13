const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test creation US', function() {
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
  it('Test creation US', async function() {
    // Test name: Test creation US
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(5) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(5) > td:nth-child(1)")).click()
    // 4 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 5 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 6 | click | id=jesouhaite | 
    await driver.findElement(By.id("jesouhaite")).click()
    // 7 | type | id=jesouhaite | Avoir accès ce super projet
    await driver.findElement(By.id("jesouhaite")).sendKeys("Avoir accès ce super projet")
    // 8 | type | id=afinde | pouvoir le tester
    await driver.findElement(By.id("afinde")).sendKeys("pouvoir le tester")
    // 9 | click | id=importance | 
    await driver.findElement(By.id("importance")).click()
    // 10 | select | id=importance | label=Moyenne-Haute
    {
      const dropdown = await driver.findElement(By.id("importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Moyenne-Haute']")).click()
    }
    // 11 | click | css=#importance > option:nth-child(2) | 
    await driver.findElement(By.css("#importance > option:nth-child(2)")).click()
    // 12 | click | id=difficulte | 
    await driver.findElement(By.id("difficulte")).click()
    // 13 | select | id=difficulte | label=21
    {
      const dropdown = await driver.findElement(By.id("difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '21']")).click()
    }
    // 14 | click | css=option:nth-child(7) | 
    await driver.findElement(By.css("option:nth-child(7)")).click()
    // 15 | click | id=plannification | 
    await driver.findElement(By.id("plannification")).click()
    // 16 | select | id=plannification | label=Sprint 1
    {
      const dropdown = await driver.findElement(By.id("plannification"))
      await dropdown.findElement(By.xpath("//option[. = 'Sprint 1']")).click()
    }
    // 17 | click | css=#plannification > option:nth-child(2) | 
    await driver.findElement(By.css("#plannification > option:nth-child(2)")).click()
    // 18 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
  })
})
