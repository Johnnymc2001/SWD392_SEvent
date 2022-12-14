using System.Data;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Persistence
{
	public class DataContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
	{
		public DataContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<User> Users { get; set; }

		public DbSet<Event> Events { get; set; }

		public DbSet<EventAgenda> EventAgendas { get; set; }

		public DbSet<Organizer> Organizers { get; set; }

		public DbSet<Post> Posts { get; set; }

		public DbSet<Ticket> Tickets { get; set; }

		public DbSet<TicketUser> TicketUsers { get; set; }

		public DbSet<EventUser> EventUsers { get; set; }

		public DbSet<EventCategory> EventCategories { get; set; }

		public DbSet<Comment> Comments { get; set; }

		public DbSet<EventOrganizer> EventOrganizers { get; set; }

		public DbSet<UserImage> UserImages { get; set; }

		public DbSet<UserFCMToken> UserFCMTokens { get; set; }

		public DbSet<EventCode> EventCodes { get; set; }

		public DbSet<Location> Locations { get; set; }

	}
}
