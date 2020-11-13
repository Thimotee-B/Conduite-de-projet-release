const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreationProjet', function() {
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
  it('CreationProjet', async function() {
    // Test name: CreationProjet
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 4 | click | id=projectName | 
    await driver.findElement(By.id("projectName")).click()
    // 5 | type | id=projectName | Test de creation
    await driver.findElement(By.id("projectName")).sendKeys("Test de creation")
    // 6 | type | id=projectDesc | on test la creation du projet
    await driver.findElement(By.id("projectDesc")).sendKeys("on test la creation du projet")
    // 7 | mouseDownAt | id=sprintDelay | -2,-5
    {
      const element = await driver.findElement(By.id("sprintDelay"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 8 | mouseMoveAt | id=sprintDelay | -2,-5
    {
      const element = await driver.findElement(By.id("sprintDelay"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 9 | mouseUpAt | id=sprintDelay | -2,-5
    {
      const element = await driver.findElement(By.id("sprintDelay"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 10 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 11 | type | id=sprintDelay | 4
    await driver.findElement(By.id("sprintDelay")).sendKeys("4")
    // 12 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 13 | type | id=dateEnd | 2020-11-03
    await driver.findElement(By.id("dateEnd")).sendKeys("2020-11-03")
    // 14 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 15 | type | id=dateEnd | 2021-02-05
    await driver.findElement(By.id("dateEnd")).sendKeys("2021-02-05")
    // 16 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
  })
})
