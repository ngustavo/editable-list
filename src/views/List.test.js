
import List from 'List.vue'

describe('List', () => {

  it("dialog should be hidden", () => {
    const data = List.data()
    expect(data.dialog).toBe(false)
  })

})