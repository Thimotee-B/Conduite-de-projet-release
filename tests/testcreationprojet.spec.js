const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test creation projet', function() {
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
  it('Test creation projet', async function() {
    // Test name: Test creation projet
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 4 | click | id=projectName | 
    await driver.findElement(By.id("projectName")).click()
    // 5 | type | id=projectName | Super projet
    await driver.findElement(By.id("projectName")).sendKeys("Super projet")
    // 6 | type | id=sprintDelay | 3
    await driver.findElement(By.id("sprintDelay")).sendKeys("3")
    // 7 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 8 | type | id=sprintDelay | 4
    await driver.findElement(By.id("sprintDelay")).sendKeys("4")
    // 9 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 10 | doubleClick | id=sprintDelay | 
    {
      const element = await driver.findElement(By.id("sprintDelay"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 11 | type | id=sprintDelay | 5
    await driver.findElement(By.id("sprintDelay")).sendKeys("5")
    // 12 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 13 | type | id=projectDesc | Super projet test 
    await driver.findElement(By.id("projectDesc")).sendKeys("Super projet test ")
    // 14 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 15 | click | css=.modal-body | 
    await driver.findElement(By.css(".modal-body")).click()
    // 16 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 17 | type | id=dateEnd | 2022-11-03
    await driver.findElement(By.id("dateEnd")).sendKeys("2022-11-03")
    // 18 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 19 | type | id=dateEnd | 2022-11-11
    await driver.findElement(By.id("dateEnd")).sendKeys("2022-11-11")
    // 20 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 21 | click | css=.clickable-row:nth-child(3) > td:nth-child(3) | 
    await driver.findElement(By.css(".clickable-row:nth-child(3) > td:nth-child(3)")).click()
    // 22 | click | css=.sticky-footer | 
    await driver.findElement(By.css(".sticky-footer")).click()
  })
})
