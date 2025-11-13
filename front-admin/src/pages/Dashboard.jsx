import React from 'react'
const Dashboard = () => {
  return (
     <>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">Products Performance</h4>
                      <p className="card-subtitle">
                        Ample Admin Vs Pixel Admin
                      </p>
                    </div>
                    <div className="ms-auto mt-3 mt-md-0">
                      <select className="form-select theme-select border-0" aria-label="Default select example">
                        <option value="1">March 2025</option>
                        <option value="2">March 2025</option>
                        <option value="3">March 2025</option>
                      </select>
                    </div>
                  </div>
                  <div className="table-responsive mt-4">
                    <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                      <thead>
                        <tr>
                          <th scope="col" className="px-0 text-muted">
                            Assigned
                          </th>
                          <th scope="col" className="px-0 text-muted">Name</th>
                          <th scope="col" className="px-0 text-muted">
                            Priority
                          </th>
                          <th scope="col" className="px-0 text-muted text-end">
                            Budget
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src="/public/images/profile/user-3.jpg" className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">Sunil Joshi</h6>
                                <span className="text-muted">Web Designer</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">Elite Admin</td>
                          <td className="px-0">
                            <span className="badge bg-info">Low</span>
                          </td>
                          <td className="px-0 text-dark fw-medium text-end">
                            $3.9K
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src="/public/images/profile/user-5.jpg" className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">
                                  Andrew McDownland
                                </h6>
                                <span className="text-muted">Project Manager</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">Real Homes WP Theme</td>
                          <td className="px-0">
                            <span className="badge text-bg-primary">Medium</span>
                          </td>
                          <td className="px-0 text-dark fw-medium text-end">
                            $24.5K
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src="/public/images/profile/user-6.jpg" className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">
                                  Christopher Jamil
                                </h6>
                                <span className="text-muted">SEO Manager</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">MedicalPro WP Theme</td>
                          <td className="px-0">
                            <span className="badge bg-warning">Hight</span>
                          </td>
                          <td className="px-0 text-dark fw-medium text-end">
                            $12.8K
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src="/public/images/profile/user-7.jpg" className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">Nirav Joshi</h6>
                                <span className="text-muted">Frontend Engineer</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">Hosting Press HTML</td>
                          <td className="px-0">
                            <span className="badge bg-danger">Low</span>
                          </td>
                          <td className="px-0 text-dark fw-medium text-end">
                            $2.4K
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src="/public/images/profile/user-8.jpg" className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">Micheal Doe</h6>
                                <span className="text-muted">Content Writer</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">Helping Hands WP Theme</td>
                          <td className="px-0">
                            <span className="badge bg-success">Low</span>
                          </td>
                          <td className="px-0 text-dark fw-medium text-end">
                            $9.3K
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Dashboard