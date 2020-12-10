import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'

export default function Footer() {
	return (
		<MDBFooter bg='light' className='font-small pt-4 mt-4'>
			<MDBContainer fluid className='text-center text-md-left'>
				<MDBRow>
					<MDBCol md='6'>
						<p>We hope you enjoy our little game!</p>
					</MDBCol>
					<MDBCol md='6'>
						<ul>
							<li className='list-unstyled'>
								<a href='https://github.com/SE-Nie/Pokemon-Frontend'>
									<FontAwesomeIcon icon={['fab', 'github']} /> frontend
								</a>
							</li>
							<li className='list-unstyled'>
								<a href='https://github.com/SE-Nie/Pokemon-Backend'>
									<i className='fab fa-github'></i> backend
								</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className='footer-copyright text-center py-3'>
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{' '}
					<a> Elton, Peter and Svenja </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}
