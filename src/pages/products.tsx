import React from 'react'
import { BiAddToQueue, BiDownload, BiUpload } from 'react-icons/bi';

function Products() {
  return (
    <>
      <div className="col-span-2">
        <div className="flex justify-between items-center">
          <div className="product--title ">
            <h1 className="text-3xl">Products</h1>
            <p>Manage your store's inventory pricing and details</p>
          </div>

          <div className="flex gap-3 ">
            <button className="btn bg-surface border-gray-300">
              <BiDownload></BiDownload> Export
            </button>
            <button className="btn bg-surface border-gray-300">
              <BiUpload></BiUpload> Import
            </button>
            <button className="btn bg-primary-500 text-surface border-gray-300">
              <BiAddToQueue></BiAddToQueue> Add Product
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-surface p-10 ">
          <div className="flex justify-between items-center flex-col">
            <div className="flex items-center justify-between gap-5 w-full">
              <label className="input rounded-2xl">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" placeholder="Search by name,brand" />
              </label>

              <div className='flex gap-5'>
                <div className="flex justify-between gap-1 items-center">
                  <h1 className="text-sm font-light text-gray-500">
                    Category:
                  </h1>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-5 rounded-2xl bg-surface"
                    >
                      All Categories
                    </div>
                    <ul
                      tabIndex={-1}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between gap-1 items-center">
                  <h1 className="text-sm font-light text-gray-500">
                    Status:
                  </h1>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-5 rounded-2xl bg-surface"
                    >
                      All Status
                    </div>
                    <ul
                      tabIndex={-1}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Inventory</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Organic Veggies</td>
                    <td>
                      <b>423</b> in stock
                    </td>
                    <td>$4.99</td>
                    <td>
                      <div className="badge badge-success">active</div>
                    </td>
                    <td>...</td>
                  </tr>
                </tbody>
                {/* foot */}
                {/* <tfoot>
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Inventory</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </tfoot> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products