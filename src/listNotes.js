export const listNotes = notes => {
  notes.forEach(({content, id, tags}) => {
    console.log('id: ', id)
    console.log('tags: ', tags)
    console.log('content: ', content)
    console.log('\n')
  })
}
