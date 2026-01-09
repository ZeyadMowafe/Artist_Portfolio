using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Data;
using Microsoft.Extensions.DependencyInjection;
using System;
using Data.Repositories;

namespace Data.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDataServices(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"))
            );

            services.AddScoped<IUserRepository, UserRepository>();

            return services;
        }
    }
}
