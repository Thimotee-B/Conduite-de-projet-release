const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('EndToEndComplet13nov', function() {
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
  it('EndToEndComplet13nov', async function() {
    // Test name: EndToEndComplet13nov
    // Step # | name | target | value
    // 1 | open | /projectList | 
    await driver.get("http://localhost:3000/projectList")
    // 2 | setWindowSize | 1936x1096 | 
    await driver.manage().window().setRect(1936, 1096)
    // 3 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 4 | click | id=projectName | 
    await driver.findElement(By.id("projectName")).click()
    // 5 | type | id=projectName | Test end to end complet
    await driver.findElement(By.id("projectName")).sendKeys("Test end to end complet")
    // 6 | click | id=projectDesc | 
    await driver.findElement(By.id("projectDesc")).click()
    // 7 | type | id=projectDesc | on va tester le end to end entier du 13 nov pour le sprint 1
    await driver.findElement(By.id("projectDesc")).sendKeys("on va tester le end to end entier du 13 nov pour le sprint 1")
    // 8 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 9 | type | id=sprintDelay | 3
    await driver.findElement(By.id("sprintDelay")).sendKeys("3")
    // 10 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 11 | type | id=sprintDelay | 4
    await driver.findElement(By.id("sprintDelay")).sendKeys("4")
    // 12 | click | id=sprintDelay | 
    await driver.findElement(By.id("sprintDelay")).click()
    // 13 | click | id=dateEnd | 
    await driver.findElement(By.id("dateEnd")).click()
    // 14 | type | id=dateEnd | 2021-01-15
    await driver.findElement(By.id("dateEnd")).sendKeys("2021-01-15")
    // 15 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 16 | click | css=.clickable-row:nth-child(7) > td:nth-child(1) | 
    await driver.findElement(By.css(".clickable-row:nth-child(7) > td:nth-child(1)")).click()
    // 17 | click | linkText=Sprints | 
    await driver.findElement(By.linkText("Sprints")).click()
    // 18 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 19 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 20 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 21 | click | id=entantque | 
    await driver.findElement(By.id("entantque")).click()
    // 22 | select | id=entantque | label=Développeur
    {
      const dropdown = await driver.findElement(By.id("entantque"))
      await dropdown.findElement(By.xpath("//option[. = 'Développeur']")).click()
    }
    // 23 | click | css=#entantque > option:nth-child(2) | 
    await driver.findElement(By.css("#entantque > option:nth-child(2)")).click()
    // 24 | click | id=jesouhaite | 
    await driver.findElement(By.id("jesouhaite")).click()
    // 25 | type | id=jesouhaite | faire le test end to end
    await driver.findElement(By.id("jesouhaite")).sendKeys("faire le test end to end")
    // 26 | click | id=afinde | 
    await driver.findElement(By.id("afinde")).click()
    // 27 | type | id=afinde | voir si ca marche
    await driver.findElement(By.id("afinde")).sendKeys("voir si ca marche")
    // 28 | click | id=importance | 
    await driver.findElement(By.id("importance")).click()
    // 29 | select | id=importance | label=Moyenne-Haute
    {
      const dropdown = await driver.findElement(By.id("importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Moyenne-Haute']")).click()
    }
    // 30 | click | css=#importance > option:nth-child(2) | 
    await driver.findElement(By.css("#importance > option:nth-child(2)")).click()
    // 31 | click | id=difficulte | 
    await driver.findElement(By.id("difficulte")).click()
    // 32 | select | id=difficulte | label=55
    {
      const dropdown = await driver.findElement(By.id("difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '55']")).click()
    }
    // 33 | click | css=option:nth-child(9) | 
    await driver.findElement(By.css("option:nth-child(9)")).click()
    // 34 | click | id=plannification | 
    await driver.findElement(By.id("plannification")).click()
    // 35 | select | id=plannification | label=Sprint 1
    {
      const dropdown = await driver.findElement(By.id("plannification"))
      await dropdown.findElement(By.xpath("//option[. = 'Sprint 1']")).click()
    }
    // 36 | click | css=#plannification > option:nth-child(2) | 
    await driver.findElement(By.css("#plannification > option:nth-child(2)")).click()
    // 37 | mouseDownAt | css=.btn-success | 34.066650390625,21
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 38 | mouseMoveAt | css=.btn-success | 34.066650390625,21
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 39 | mouseUpAt | css=.btn-success | 34.066650390625,21
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 40 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 41 | click | linkText=Sprints | 
    await driver.findElement(By.linkText("Sprints")).click()
    // 42 | click | css=.btn-sm | 
    await driver.findElement(By.css(".btn-sm")).click()
    // 43 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 44 | click | css=.fa-edit | 
    await driver.findElement(By.css(".fa-edit")).click()
    // 45 | click | css=.modal-body:nth-child(3) #afinde | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).click()
    // 46 | type | css=.modal-body:nth-child(3) #afinde | voir si ca marche ca a bien l'air de marcher pour l'instant
    await driver.findElement(By.css(".modal-body:nth-child(3) #afinde")).sendKeys("voir si ca marche ca a bien l\'air de marcher pour l\'instant")
    // 47 | click | css=.modal-body:nth-child(3) #difficulte | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte")).click()
    // 48 | select | css=.modal-body:nth-child(3) #difficulte | label=2
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte"))
      await dropdown.findElement(By.xpath("//option[. = '2']")).click()
    }
    // 49 | click | css=.modal-body:nth-child(3) #difficulte > option:nth-child(2) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #difficulte > option:nth-child(2)")).click()
    // 50 | click | css=.modal-body:nth-child(3) #importance | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance")).click()
    // 51 | select | css=.modal-body:nth-child(3) #importance | label=Haute
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #importance"))
      await dropdown.findElement(By.xpath("//option[. = 'Haute']")).click()
    }
    // 52 | click | css=.modal-body:nth-child(3) #importance > option:nth-child(1) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #importance > option:nth-child(1)")).click()
    // 53 | click | css=.modal-body:nth-child(3) #plannification | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification")).click()
    // 54 | select | css=.modal-body:nth-child(3) #plannification | label=Sprint 2
    {
      const dropdown = await driver.findElement(By.css(".modal-body:nth-child(3) #plannification"))
      await dropdown.findElement(By.xpath("//option[. = 'Sprint 2']")).click()
    }
    // 55 | click | css=.modal-body:nth-child(3) #plannification > option:nth-child(3) | 
    await driver.findElement(By.css(".modal-body:nth-child(3) #plannification > option:nth-child(3)")).click()
    // 56 | click | css=.modal-footer:nth-child(4) > .btn-success | 
    await driver.findElement(By.css(".modal-footer:nth-child(4) > .btn-success")).click()
    // 57 | click | linkText=Sprints | 
    await driver.findElement(By.linkText("Sprints")).click()
    // 58 | click | linkText=Backlog | 
    await driver.findElement(By.linkText("Backlog")).click()
    // 59 | click | css=.fa-trash-alt | 
    await driver.findElement(By.css(".fa-trash-alt")).click()
  })
})
