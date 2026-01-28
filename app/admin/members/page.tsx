'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Member {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  state: string
  ghinNumber: string
  handicap: number
  memberSince: number
  status: 'active' | 'inactive'
}

const initialMembers: Member[] = [
  { id: '1', firstName: 'John', lastName: 'Smith', email: 'john@email.com', phone: '555-0101', city: 'Atlanta', state: 'GA', ghinNumber: '1234567', handicap: 8.2, memberSince: 2015, status: 'active' },
  { id: '2', firstName: 'Mike', lastName: 'Johnson', email: 'mike@email.com', phone: '555-0102', city: 'Charlotte', state: 'NC', ghinNumber: '2345678', handicap: 12.5, memberSince: 2016, status: 'active' },
  { id: '3', firstName: 'David', lastName: 'Williams', email: 'david@email.com', phone: '555-0103', city: 'Houston', state: 'TX', ghinNumber: '3456789', handicap: 6.8, memberSince: 2015, status: 'active' },
  { id: '4', firstName: 'Chris', lastName: 'Brown', email: 'chris@email.com', phone: '555-0104', city: 'Chicago', state: 'IL', ghinNumber: '4567890', handicap: 14.1, memberSince: 2017, status: 'active' },
  { id: '5', firstName: 'James', lastName: 'Davis', email: 'james@email.com', phone: '555-0105', city: 'Los Angeles', state: 'CA', ghinNumber: '5678901', handicap: 10.3, memberSince: 2018, status: 'active' },
]

export default function MembersAdmin() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [showModal, setShowModal] = useState(false)
  const [editingMember, setEditingMember] = useState<Member | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const [formData, setFormData] = useState<Partial<Member>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    ghinNumber: '',
    handicap: 0,
    memberSince: new Date().getFullYear(),
    status: 'active',
  })

  const handleEdit = (member: Member) => {
    setEditingMember(member)
    setFormData(member)
    setShowModal(true)
  }

  const handleAdd = () => {
    setEditingMember(null)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      ghinNumber: '',
      handicap: 0,
      memberSince: new Date().getFullYear(),
      status: 'active',
    })
    setShowModal(true)
  }

  const handleSave = () => {
    if (editingMember) {
      setMembers(members.map(m => m.id === editingMember.id ? { ...m, ...formData } : m))
    } else {
      const newMember: Member = {
        ...formData as Member,
        id: Date.now().toString(),
      }
      setMembers([...members, newMember])
    }
    setShowModal(false)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this member?')) {
      setMembers(members.filter(m => m.id !== id))
    }
  }

  const filteredMembers = members.filter(m =>
    `${m.firstName} ${m.lastName} ${m.email} ${m.city}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-masters-dark text-white">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-400 hover:text-white">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-serif font-bold">Manage Members</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
            />
          </div>
          <button onClick={handleAdd} className="btn-primary">
            + Add Member
          </button>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">GHIN</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Handicap</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Since</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-masters-dark">
                        {member.firstName} {member.lastName}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {member.city}, {member.state}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {member.email}
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-mono">
                      {member.ghinNumber}
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-masters-green">
                      {member.handicap.toFixed(1)}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">
                      {member.memberSince}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        member.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleEdit(member)}
                        className="text-masters-green hover:text-masters-gold mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''} total
        </p>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-serif font-bold text-masters-dark mb-6">
                {editingMember ? 'Edit Member' : 'Add New Member'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName || ''}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName || ''}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city || ''}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    value={formData.state || ''}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GHIN Number</label>
                  <input
                    type="text"
                    value={formData.ghinNumber || ''}
                    onChange={(e) => setFormData({ ...formData, ghinNumber: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Handicap</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.handicap || ''}
                    onChange={(e) => setFormData({ ...formData, handicap: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                  <input
                    type="number"
                    value={formData.memberSince || ''}
                    onChange={(e) => setFormData({ ...formData, memberSince: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status || 'active'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="btn-primary"
                >
                  {editingMember ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
