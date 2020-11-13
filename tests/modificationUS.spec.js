const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ModificationUS', function() {
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
  it('ModificationUS', async function() {
    // Test name: ModificationUS
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.clickable-row:nth-child(3) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(3) > td:nth-child(1)")).click()
    // 4 | click | css=.nav-item:nth-child(7) span | 
    await driver.findElement(By.css(".nav-item:nth-child(7) span")).click()
    // 5 | click | css=.fa-edit | 
    await driver.findElement(By.css(".fa-edit")).click()
    // 6 | click | css=.modal-body:nth-child(3) #jesouhaite | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #jesouhaite")).click()
    // 7 | click | css=.modal-body:nth-child(3) #afinde | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).click()
    // 8 | type | css=.modal-body:nth-child(3) #afinde | pouvoir tester les fonctionnalites et modifier les informations
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).sendKeys("pouvoir tester les fonctionnalites et modifier les informations")
    // 9 | click | css=.modal-body:nth-child(3) #importance | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance")).click()
    // 10 | select | css=.modal-body:nth-child(3) #importance | label=Basse
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Basse']")).click()
    }
    // 11 | click | css=.modal-body:nth-child(3) #importance > option:nth-child(4) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance > option:nth-child(4)")).click()
    // 12 | click | css=.modal-body:nth-child(3) #difficulte | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte")).click()
    // 13 | select | css=.modal-body:nth-child(3) #difficulte | label=13
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '13']")).click()
    }
    // 14 | click | css=.modal-body:nth-child(3) option:nth-child(6) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) option:nth-child(6)")).click()
    // 15 | click | css=.modal-body:nth-child(3) #plannification | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification")).click()
    // 16 | select | css=.modal-body:nth-child(3) #plannification | label=Sprint 1
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #plannification"))
      await dropdown.findElement(By.xpath("//option[. = 'Sprint 1']")).click()
    }
    // 17 | click | css=.modal-body:nth-child(3) #plannification > option:nth-child(2) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification > option:nth-child(2)")).click()
    // 18 | click | css=.modal-footer:nth-child(4) > .btn-success | 
    await driver.findElement(By.css(".modal-footer:nth-child(4) > .btn-success")).click()
  })
})
