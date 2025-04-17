<script setup lang="ts">
import { ref, computed } from 'vue';

// Dữ liệu cho bảng cơ bản
const basicUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert@example.com',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Michael Wilson',
    email: 'michael@example.com',
    status: 'Active',
  },
];

// Dữ liệu cho bảng với pagination
const invoices = [
  {
    id: '#INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    id: '#INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    id: '#INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: '#INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    id: '#INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    id: '#INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: '#INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

// Pagination
const currentPage = ref(1);
const itemsPerPage = 4;

const paginatedInvoices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return invoices.slice(start, end);
});

const totalPages = Math.ceil(invoices.length / itemsPerPage);

function nextPage() {
  if (currentPage.value < totalPages) currentPage.value++;
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

// Sorting
const sortedUsers = ref([...basicUsers]);
const sortColumn = ref('name');
const sortDirection = ref('asc');

function sortTable(column: string) {
  if (sortColumn.value === column) {
    // Toggle direction
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortColumn.value = column;
    sortDirection.value = 'asc';
  }

  sortedUsers.value = [...basicUsers].sort((a, b) => {
    const valueA = a[column as keyof typeof a];
    const valueB = b[column as keyof typeof b];

    if (valueA < valueB) return sortDirection.value === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection.value === 'asc' ? 1 : -1;
    return 0;
  });
}

// Selectable rows
const selectedRows = ref<number[]>([]);

function toggleSelectAll(event: Event) {
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    selectedRows.value = basicUsers.map((user) => user.id);
  } else {
    selectedRows.value = [];
  }
}

function toggleSelectRow(id: number) {
  const index = selectedRows.value.indexOf(id);
  if (index === -1) {
    selectedRows.value.push(id);
  } else {
    selectedRows.value.splice(index, 1);
  }
}

const allSelected = computed(() => {
  return selectedRows.value.length === basicUsers.length;
});

// Search cho bảng có selectable rows
const searchTerm = ref('');
const filteredUsers = computed(() => {
  if (!searchTerm.value) return basicUsers;

  const term = searchTerm.value.toLowerCase();
  return basicUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.status.toLowerCase().includes(term)
  );
});

// Empty state
const emptyData = ref<any[]>([]);

// Helper function để chọn variant cho badge
function getStatusVariant(status: string) {
  if (status === 'Active' || status === 'Paid') return 'default';
  if (status === 'Inactive' || status === 'Unpaid') return 'destructive';
  return 'outline';
}
</script>

<template>
  <div class="flex flex-col gap-16">
    <!-- Basic Table -->
    <div class="space-y-4">
      <ZTable>
        <ZTableHeader>
          <ZTableRow>
            <ZTableHead>ID</ZTableHead>
            <ZTableHead>Name</ZTableHead>
            <ZTableHead>Email</ZTableHead>
            <ZTableHead>Status</ZTableHead>
          </ZTableRow>
        </ZTableHeader>
        <ZTableBody>
          <ZTableRow v-for="user in basicUsers" :key="user.id">
            <ZTableCell>{{ user.id }}</ZTableCell>
            <ZTableCell>{{ user.name }}</ZTableCell>
            <ZTableCell>{{ user.email }}</ZTableCell>
            <ZTableCell>
              <ZBadge :variant="getStatusVariant(user.status)">
                {{ user.status }}
              </ZBadge>
            </ZTableCell>
          </ZTableRow>
        </ZTableBody>
      </ZTable>
    </div>

    <!-- Sortable Table -->
    <div class="space-y-4">
      <ZTable>
        <ZTableHeader>
          <ZTableRow>
            <ZTableHead class="cursor-pointer" @click="sortTable('id')">
              ID
              <ZIcon
                v-if="sortColumn === 'id'"
                :name="
                  sortDirection === 'asc'
                    ? 'i-lucide-chevron-up'
                    : 'i-lucide-chevron-down'
                "
                class="ml-1 size-4"
              />
            </ZTableHead>
            <ZTableHead class="cursor-pointer" @click="sortTable('name')">
              Name
              <ZIcon
                v-if="sortColumn === 'name'"
                :name="
                  sortDirection === 'asc'
                    ? 'i-lucide-chevron-up'
                    : 'i-lucide-chevron-down'
                "
                class="ml-1 size-4"
              />
            </ZTableHead>
            <ZTableHead class="cursor-pointer" @click="sortTable('email')">
              Email
              <ZIcon
                v-if="sortColumn === 'email'"
                :name="
                  sortDirection === 'asc'
                    ? 'i-lucide-chevron-up'
                    : 'i-lucide-chevron-down'
                "
                class="ml-1 size-4"
              />
            </ZTableHead>
            <ZTableHead class="cursor-pointer" @click="sortTable('status')">
              Status
              <ZIcon
                v-if="sortColumn === 'status'"
                :name="
                  sortDirection === 'asc'
                    ? 'i-lucide-chevron-up'
                    : 'i-lucide-chevron-down'
                "
                class="ml-1 size-4"
              />
            </ZTableHead>
          </ZTableRow>
        </ZTableHeader>
        <ZTableBody>
          <ZTableRow v-for="user in sortedUsers" :key="user.id">
            <ZTableCell>{{ user.id }}</ZTableCell>
            <ZTableCell>{{ user.name }}</ZTableCell>
            <ZTableCell>{{ user.email }}</ZTableCell>
            <ZTableCell>
              <ZBadge :variant="getStatusVariant(user.status)">
                {{ user.status }}
              </ZBadge>
            </ZTableCell>
          </ZTableRow>
        </ZTableBody>
      </ZTable>
    </div>

    <!-- Table with Pagination -->
    <div class="space-y-4">
      <ZTable>
        <ZTableHeader>
          <ZTableRow>
            <ZTableHead>Invoice</ZTableHead>
            <ZTableHead>Status</ZTableHead>
            <ZTableHead>Method</ZTableHead>
            <ZTableHead class="text-right">Amount</ZTableHead>
          </ZTableRow>
        </ZTableHeader>
        <ZTableBody>
          <ZTableRow v-for="invoice in paginatedInvoices" :key="invoice.id">
            <ZTableCell>{{ invoice.id }}</ZTableCell>
            <ZTableCell>
              <ZBadge :variant="getStatusVariant(invoice.paymentStatus)">
                {{ invoice.paymentStatus }}
              </ZBadge>
            </ZTableCell>
            <ZTableCell>{{ invoice.paymentMethod }}</ZTableCell>
            <ZTableCell class="text-right">{{
              invoice.totalAmount
            }}</ZTableCell>
          </ZTableRow>
        </ZTableBody>
        <ZTableFooter>
          <ZTableRow>
            <ZTableCell colspan="4">
              <div class="flex items-center justify-end space-x-2">
                <ZButton
                  variant="outline"
                  size="sm"
                  :disabled="currentPage === 1"
                  @click="prevPage"
                >
                  Previous
                </ZButton>
                <span class="text-sm text-muted-foreground">
                  Page {{ currentPage }} of {{ totalPages }}
                </span>
                <ZButton
                  variant="outline"
                  size="sm"
                  :disabled="currentPage === totalPages"
                  @click="nextPage"
                >
                  Next
                </ZButton>
              </div>
            </ZTableCell>
          </ZTableRow>
        </ZTableFooter>
      </ZTable>
    </div>

    <!-- Selectable Rows -->
    <div class="space-y-4">
      <ZCard>
        <ZCardHeader>
          <ZCardTitle>Users</ZCardTitle>
          <ZCardDescription
            >Manage your users with selectable rows.</ZCardDescription
          >
        </ZCardHeader>
        <ZCardContent>
          <div class="flex justify-between mb-4">
            <ZInput
              v-model="searchTerm"
              placeholder="Search users..."
              class="max-w-xs"
            >
              <template #prefix>
                <ZIcon name="i-lucide-search" class="text-muted-foreground" />
              </template>
            </ZInput>
            <ZButton
              size="sm"
              variant="destructive"
              :disabled="selectedRows.length === 0"
            >
              Delete Selected
            </ZButton>
          </div>

          <ZTable>
            <ZTableHeader>
              <ZTableRow>
                <ZTableHead class="w-12">
                  <ZCheckbox :checked="allSelected" @change="toggleSelectAll" />
                </ZTableHead>
                <ZTableHead>Name</ZTableHead>
                <ZTableHead>Email</ZTableHead>
                <ZTableHead>Status</ZTableHead>
                <ZTableHead class="text-right">Actions</ZTableHead>
              </ZTableRow>
            </ZTableHeader>
            <ZTableBody>
              <template v-if="filteredUsers.length">
                <ZTableRow v-for="user in filteredUsers" :key="user.id">
                  <ZTableCell>
                    <ZCheckbox
                      :checked="selectedRows.includes(user.id)"
                      @change="toggleSelectRow(user.id)"
                    />
                  </ZTableCell>
                  <ZTableCell>{{ user.name }}</ZTableCell>
                  <ZTableCell>{{ user.email }}</ZTableCell>
                  <ZTableCell>
                    <ZBadge :variant="getStatusVariant(user.status)">
                      {{ user.status }}
                    </ZBadge>
                  </ZTableCell>
                  <ZTableCell class="text-right">
                    <ZDropdownMenu>
                      <ZDropdownMenuTrigger as-child>
                        <ZButton variant="ghost" size="icon">
                          <ZIcon
                            name="i-lucide-more-horizontal"
                            class="size-4"
                          />
                        </ZButton>
                      </ZDropdownMenuTrigger>
                      <ZDropdownMenuContent align="end">
                        <ZDropdownMenuItem>
                          <ZIcon name="i-lucide-pen" class="mr-2 size-4" />
                          Edit
                        </ZDropdownMenuItem>
                        <ZDropdownMenuItem>
                          <ZIcon name="i-lucide-copy" class="mr-2 size-4" />
                          Duplicate
                        </ZDropdownMenuItem>
                        <ZDropdownMenuSeparator />
                        <ZDropdownMenuItem>
                          <ZIcon name="i-lucide-trash" class="mr-2 size-4" />
                          Delete
                        </ZDropdownMenuItem>
                      </ZDropdownMenuContent>
                    </ZDropdownMenu>
                  </ZTableCell>
                </ZTableRow>
              </template>
              <ZTableEmpty v-else :colspan="5">
                <div class="flex flex-col items-center">
                  <ZIcon
                    name="i-lucide-search-x"
                    class="size-10 text-muted-foreground mb-2"
                  />
                  <p>No users found</p>
                  <ZButton
                    variant="outline"
                    size="sm"
                    class="mt-4"
                    @click="searchTerm = ''"
                  >
                    Clear search
                  </ZButton>
                </div>
              </ZTableEmpty>
            </ZTableBody>
          </ZTable>
        </ZCardContent>
      </ZCard>
    </div>

    <!-- Empty State -->
    <div class="space-y-4">
      <ZTable>
        <ZTableHeader>
          <ZTableRow>
            <ZTableHead>ID</ZTableHead>
            <ZTableHead>Name</ZTableHead>
            <ZTableHead>Email</ZTableHead>
            <ZTableHead>Status</ZTableHead>
          </ZTableRow>
        </ZTableHeader>
        <ZTableBody>
          <template v-if="emptyData.length">
            <ZTableRow v-for="item in emptyData" :key="item.id">
              <ZTableCell>{{ item.id }}</ZTableCell>
              <ZTableCell>{{ item.name }}</ZTableCell>
              <ZTableCell>{{ item.email }}</ZTableCell>
              <ZTableCell>{{ item.status }}</ZTableCell>
            </ZTableRow>
          </template>
          <ZTableEmpty v-else :colspan="4">
            <div class="flex flex-col items-center">
              <ZIcon
                name="i-lucide-database"
                class="size-10 text-muted-foreground mb-2"
              />
              <p>No data available</p>
              <ZButton variant="outline" size="sm" class="mt-4">
                Add New Record
              </ZButton>
            </div>
          </ZTableEmpty>
        </ZTableBody>
      </ZTable>
    </div>
  </div>
</template>
