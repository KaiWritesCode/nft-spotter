import React from 'react'
import styles from './Collection.module.css'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { IFilters } from '../../Interfaces'

const Filter = ({handleChange, handleFilter, removeFilters, handleOrder, handleSubmit, orderBy, filteredApi, sales}:IFilters) => {

    // filter buttons from bootstrap 

const active = { fontWeight: 'bold' }
  return (
    <>
       <div className="d-flex justify-content-center align-items-center flex-column my-3">
            <div className={styles.filterWrapper}>
                <h2 className='mx-3'>Filter</h2>
                <form className={`d-flex ${styles.form}`}>
                    <div className="input-group mb-3">
                        <input onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Search Token" />
                        <button
                            onClick={handleSubmit}
                            className="btn btn-secondary"
                            type="button"
                            id="button-addon2">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form >
            </div>

            <div className={styles.filterWrapper}>
                <Dropdown style={{ margin: '0 2px' }}>
                    <Dropdown.Toggle
                        className={styles.btnPrimary}
                        id="dropdown-basic"
                        style={{ backgroundColor: "#7487c2", border: "1px solid #7487c2" }}
                    >
                        Order by
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            style={orderBy === 'asc' && filteredApi === true ? active : undefined}
                            onClick={() => handleOrder('asc')}>
                            Ascending
                        </Dropdown.Item>
                        <Dropdown.Item style={orderBy === 'desc' && filteredApi === true ? active : undefined}
                            onClick={() => handleOrder('desc')}>
                            Descending
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{ margin: '0 2px' }}>
                    <Dropdown.Toggle
                        className={styles.btnPrimary}
                        id="dropdown-basic"
                        style={{ backgroundColor: "#7487c2", border: "1px solid #7487c2" }}
                    >
                        Sales
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item style={sales === 'sale_price' && filteredApi === true ? active : undefined}
                            onClick={() => handleFilter('sale_price')}>
                            Highest Price Transactions
                        </Dropdown.Item>

                        <Dropdown.Item
                            style={sales === 'sale_count' && filteredApi === true ? active : undefined}
                            onClick={() => handleFilter('sale_count')}
                        >
                            Recently Sold
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <button onClick={removeFilters} className='btn-danger btn mx-1'>Remove Filters</button>

            </div>
        </div >
    </>
  )
}

export default Filter