import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { DocsExample } from 'src/components'

const NewCall = () => {

  return (
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>New Call</strong>
          </CCardHeader>
          <CCardBody>
              <CForm className="row g-3">
                <CCol md={6}>
                <CFormLabel htmlFor="inputState">Region</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Region...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={6}>
                <CFormLabel htmlFor="inputState">Site</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Site...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={6}>
                <CFormLabel htmlFor="inputState">Department</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Department...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={6}>
                <CFormLabel htmlFor="inputState">Maintenance Group</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Maintenance Group...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={6}>
                <CFormLabel htmlFor="inputState">Type</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Type...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">Breif Description</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Breif Description...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={2}>
                <CFormLabel htmlFor="inputState">State</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Select Region...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={6}>
                <CFormLabel htmlFor="inputState">Maintenance Description</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CCol>
                <CCol xs={12}>
                <CButton color="success">Submit</CButton>
                  <CButton color="danger">Cancel</CButton>
                </CCol>
              </CForm>
          </CCardBody>
        </CCard>
      </CCol>
  )
}

export default NewCall
