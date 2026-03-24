const TaskStatusSidebar = ({
  selectedTickets,
  resolvedTickets,
  onCompleteTicket,
  allTickets,
}) => {
  const resolvedTicketDetails = allTickets.filter((ticket) =>
    resolvedTickets.includes(ticket.ticketId),
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4 sm:mb-6">Task Status</h3>
        {selectedTickets.length > 0 ? (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {selectedTickets.map((selectedTicket) => (
              <div
                key={selectedTicket.ticketId}
                className="bg-white rounded-md border border-gray-200 p-3 shadow-sm"
              >
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  {selectedTicket.title}
                </h4>
                <button
                  onClick={() => onCompleteTicket(selectedTicket.ticketId)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-1">
            <p className="text-gray-500 text-xs">
              Select a ticket to add to Task Status
            </p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4">Resolved Task</h3>

        {resolvedTicketDetails.length > 0 ? (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {resolvedTicketDetails.map((ticket) => (
              <div
                key={ticket.ticketId}
                className="bg-indigo-50 rounded-md p-3"
              >
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {ticket.title}
                </h4>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default TaskStatusSidebar;
