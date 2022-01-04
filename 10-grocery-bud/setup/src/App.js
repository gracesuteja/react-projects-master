import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaRemoveFormat } from 'react-icons/fa'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const clearList = () => {
    setList([])
    showAlert(true, 'danger', 'all items cleared')
  }

  const removeItem = (id, title) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, 'danger', '"' + title + '" cleared')
  }

  const editItem = (id) => {
    setIsEditing(true)
    const selectedItem = list.find((item) => item.id === id)
    showAlert(true, 'danger', 'editing "' + selectedItem.title + '"')
    setEditID(id)
    setName(selectedItem.title)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      //if name is empty, then display error message
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      //if name is not empty and is edit true, then do editing action
      let oldName = ''
      setList(
        list.map((item) => {
          if (item.id === editID) {
            oldName = item.title
            return { ...item, title: name }
          }
          return item
        })
      )
      showAlert(
        true,
        'success',
        'item "' + oldName + '" edited to "' + name + '"'
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
    } else {
      //if name is not empty and not editing, then insert new value
      const newList = { id: new Date().getTime().toString(), title: name }
      setList([...list, newList])
      showAlert(true, 'success', '"' + name + '" added')
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, msg, type })
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            {...alert}
            removeAlert={showAlert}
            list={list}
            isEditing={isEditing}
          />
        )}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. egg'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
