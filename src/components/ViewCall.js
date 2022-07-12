import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { DocsExample } from 'src/components'
import viewCall from "../assets/json/viewcall.json"

const ViewCall = () => {

  return (
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>View Call</strong>
      </CCardHeader>
      <CCardBody>
        <p className="text-medium-emphasis small">
          {/* Use <code>hover</code> property to enable a hover state on table rows within a{' '}
          <code>&lt;CTableBody&gt;</code>. */}
        </p>
        {/* <DocsExample href="components/table#hoverable-rows"> */}
          <CTable hover bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Call Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Assigned To</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Breif Description</CTableHeaderCell>
                <CTableHeaderCell scope="col">Call Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Maintenance Group</CTableHeaderCell>
                <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Site</CTableHeaderCell>
                <CTableHeaderCell scope="col">Supplier</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
            { viewCall.map((item, index) =>
              <CTableRow key={index}>
                <CTableHeaderCell scope="row">{item.callNumber}</CTableHeaderCell>
                <CTableDataCell>{item.assignedTo}</CTableDataCell>
                <CTableDataCell>{item.Status}</CTableDataCell>
                <CTableDataCell>{item.breifDescription}</CTableDataCell>
                <CTableDataCell>{item.callDate}</CTableDataCell>
                <CTableDataCell>{item.maintenanceGroup}</CTableDataCell>
                <CTableDataCell>{item.type}</CTableDataCell>
                <CTableDataCell>{item.site}</CTableDataCell>
                <CTableDataCell>{item.Supplier}</CTableDataCell>
              </CTableRow>
            )
            }
            </CTableBody>
          </CTable>
        {/* </DocsExample> */}
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default ViewCall
