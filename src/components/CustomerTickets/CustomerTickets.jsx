import { use, useState } from "react";
import calander from "../../assets/vector.png";
import TaskStatusSidebar from "../TaskStatusSidebar/TaskStatusSidebar";

const customerTickets = ({ customerPromise }) => {
  const customerData = use(customerPromise);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const resolvedInProgressCount = customerData.filter(
    (ticket) =>
      resolvedTickets.includes(ticket.ticketId) &&
      ticket.status.includes("In-"),
  ).length;
  const inProgressCount = Math.max(
    0,
    customerData.filter((ticket) => ticket.status.includes("In-")).length -
      resolvedInProgressCount,
  );
  const resolvedCount = resolvedTickets.length;

  const handleTicketClick = (ticket) => {
    if (selectedTickets.some((t) => t.ticketId === ticket.ticketId)) {
      setSelectedTickets(
        selectedTickets.filter((t) => t.ticketId !== ticket.ticketId),
      );
    } else {
      setSelectedTickets([...selectedTickets, ticket]);
    }
  };

  const handleCompleteTicket = (ticketId) => {
    if (resolvedTickets.includes(ticketId)) return;
    setResolvedTickets([...resolvedTickets, ticketId]);
    setSelectedTickets(selectedTickets.filter((t) => t.ticketId !== ticketId));
  };

  return (
    <>
      <div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-6 sm:p-8 text-white shadow-lg">
              <h2 className="text-lg font-semibold opacity-90">In-Progress</h2>
              <p className="text-4xl sm:text-6xl font-bold mt-3 sm:mt-4">
                {inProgressCount}
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-6 sm:p-8 text-white shadow-lg">
              <h2 className="text-lg font-semibold opacity-90">Resolved</h2>
              <p className="text-4xl sm:text-6xl font-bold mt-3 sm:mt-4">
                {resolvedCount}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-10 sm:mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          <div className="xl:col-span-2">
            <h1 className="font-bold text-xl mb-4">Customer Tickets</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-7">
              {customerData.map((customer) => (
                <div
                  key={customer.ticketId}
                  onClick={() => handleTicketClick(customer)}
                  className={`card cursor-pointer transition border-2 ${selectedTickets.some((t) => t.ticketId === customer.ticketId) ? "border-purple-500 shadow-lg" : "border-gray-200 hover:border-purple-300"}`}
                >
                  <div className="card-body p-4 sm:p-6">
                    <div className="flex justify-between gap-2">
                      <h2 className="card-title text-sm">{customer.title}</h2>
                      <span
                        className={`badge ${customer.status === "Open" ? "badge-error" : "badge-warning"}`}
                      >
                        {customer.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600">
                      {customer.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-xs font-semibold">
                          {customer.ticketId}
                        </div>
                        <div className="text-xs font-semibold text-orange-600">
                          {customer.priority}
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-start">
                        <div>
                          <p className="text-xs text-gray-500">
                            {customer.customerName}
                          </p>
                        </div>
                        <div className="flex items-center ">
                          <span>
                            <img
                              className="ml-2 sm:ml-4 w-4"
                              src={calander}
                              alt=""
                            />
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            {customer.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-1">
            <TaskStatusSidebar
              selectedTickets={selectedTickets}
              resolvedTickets={resolvedTickets}
              onCompleteTicket={handleCompleteTicket}
              allTickets={customerData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default customerTickets;
