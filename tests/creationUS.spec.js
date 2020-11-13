const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreationUS', function() {
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
  it('CreationUS', async function() {
    // Test name: CreationUS
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(3) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(3) > td:nth-child(1)")).click()
    // 4 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 5 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 6 | click | id=entantque | 
    await driver.findElement(By.id("entantque")).click()
    // 7 | select | id=entantque | label=Product Owner
    {
      const dropdown = await driver.findElement(By.id("entantque"))
      await dropdown.findElement(By.xpath("//option[. = 'Product Owner']")).click()
    }
    // 8 | click | css=#entantque > option:nth-child(3) | 
    await driver.findElement(By.css("#entantque > option:nth-child(3)")).click()
    // 9 | click | id=jesouhaite | 
    await driver.findElement(By.id("jesouhaite")).click()
    // 10 | type | id=jesouhaite | avoir acces a ce super projet
    await driver.findElement(By.id("jesouhaite")).sendKeys("avoir acces a ce super projet")
    // 11 | click | id=afinde | 
    await driver.findElement(By.id("afinde")).click()
    // 12 | type | id=afinde | pouvoir tester les fonctionnalites
    await driver.findElement(By.id("afinde")).sendKeys("pouvoir tester les fonctionnalites")
    // 13 | click | id=importance | 
    await driver.findElement(By.id("importance")).click()
    // 14 | select | id=importance | label=Moyenne-Basse
    {
      const dropdown = await driver.findElement(By.id("importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Moyenne-Basse']")).click()
    }
    // 15 | click | css=#importance > option:nth-child(3) | 
    await driver.findElement(By.css("#importance > option:nth-child(3)")).click()
    // 16 | click | id=difficulte | 
    await driver.findElement(By.id("difficulte")).click()
    // 17 | select | id=difficulte | label=5
    {
      const dropdown = await driver.findElement(By.id("difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '5']")).click()
    }
    // 18 | click | css=#difficulte > option:nth-child(4) | 
    await driver.findElement(By.css("#difficulte > option:nth-child(4)")).click()
    // 19 | click | id=plannification | 
    await driver.findElement(By.id("plannification")).click()
    // 20 | click | css=#plannification > option:nth-child(1) | 
    await driver.findElement(By.css("#plannification > option:nth-child(1)")).click()
    // 21 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
  })
})
